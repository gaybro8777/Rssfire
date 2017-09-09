import XmlReader from 'xml-reader';

export const xmlParser = (xml, url) => {
  const reader = XmlReader.create();
  let parsedData = [];

  reader.on('done', data => {
    let tempData = data.children[0].children;
    while(true) {
      if(tempData.length > 1) {
        parsedData = sortFeed(tempData, url);
        break;
      } else {
        tempData = tempData[0].children;
      }
    }
  });

  reader.parse(xml);

  return parsedData;
};

const getImagePath = str => {
  let urls = [];
  let res = [];
  // const rex = /<img[^>]+src="?([^"\s]+)"?[^>]*\/>/g;
  const rex = /<img[^>]+src="?(([^"\s]+)(\.jpg|\.png))"?[^>]*\/>/g;

  while(res = rex.exec(str)) {
    // console.log('res', res);
    urls.push(res[1].replace(/^http:\/\//i, 'https://'));
    break;
  }

  return urls.length > 0 ? urls : null;
}

const entitiesDecoder = str => {
  const entities = {
    'amp': '&',
    'apos': '\'',
    'lt': '<',
    'gt': '>',
    'quot': '"',
    'nbsp': ' ',
  };

  const rex = /&([a-z]+);/ig;

  return str.replace(rex, (match, entity) => {
    entity = entity.toLowerCase();
    if (entities.hasOwnProperty(entity)) {
      return entities[entity];
    }

    return match;
  });
}

const sortFeed = (parsedData, url) => {
  let imagePaths = null;
  let siteName = null;
  let withoutTags = null;
  let feedItem = {};
  let feeds = [];

  // console.log('Parsed Data:', parsedData);

  parsedData.map(val => {
    // console.log('val', val);
    if(val.name === 'title') {
      siteName = val.children[0].value.replace(/&#(\d+);/g, (match, dec) => { return String.fromCharCode(dec)});
    }

    if(val.name === 'channel') {
      val.children.map(item => {
        if(item.name === 'title') {
          siteName = item.children[0].value.replace(/&#(\d+);/g, (match, dec) => { return String.fromCharCode(dec)});
        }
      });
    }

    if(val.name === 'item') {
      val.children.map(item => {
        switch (item.name) {
          case 'title':
            feedItem['title'] = item.children[0].value.replace(/&#(\d+);/g, (match, dec) => { return String.fromCharCode(dec)});
            break;
          case 'link':
            feedItem['link'] = item.children[0].value;
            break;
          case 'pubDate':
          case 'dc:date':
            feedItem['pubDate'] = Date.parse(item.children[0].value);
            break;
          case 'description':
          case 'content:encoded':
            if(item.children.length >= 0) {
              break;
            }

            withoutTags = entitiesDecoder(item.children[0].value);
            imagePaths = getImagePath(withoutTags);
            if(imagePaths !== null && feedItem['image'] !== null) {
              feedItem['image'] = imagePaths;
            }

            withoutTags = withoutTags.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'').replace(/&nbsp;|\t|\n/g, '');
            if(item.name === 'description') {
              feedItem['description'] = withoutTags.replace(/&#(\d+);/g, (match, dec) => { return String.fromCharCode(dec)});
            } else {
              feedItem['content'] = withoutTags.replace(/&#(\d+);/g, (match, dec) => { return String.fromCharCode(dec)});
            }

            break;
          default:
            break;
        }
      });

      feedItem['siteName'] = (siteName === null) ? ' ' : siteName;
      feedItem['feedURL'] = url;

      // console.log('Feed Item:', feedItem);
      feeds.push(feedItem);
      feedItem = {};
    }
  });

  return feeds;
};
