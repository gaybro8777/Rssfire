import XmlReader from 'xml-reader';

export const xmlParser = xml => {
  const reader = XmlReader.create();
  let parsedData = [];

  reader.on('done', data => {
    parsedData = sortFeed(data.children[0].children);
  });

  reader.parse(xml);

  return parsedData;
};

const getImagePath = str => {
  let urls = [];
  let res = [];
  const rex = /<img[^>]+src="?([^"\s]+)"?[^>]*\/>/g;

  while(res = rex.exec(str)) {
    urls.push(res[1]);
  }

  return urls.length > 0 ? urls : null;
}

const sortFeed = parsedData => {
  let imagePaths = null;
  let siteName = null;
  let feedItem = {};
  let feeds = [];

  parsedData.map(val => {
    // console.log('val', val);
    if(val.name == 'title') {
      siteName = val.children[0].value.replace(/&#(\d+);/g, (match, dec) => { return String.fromCharCode(dec)});
    }

    if(val.name == 'item') {
      val.children.map(item => {
        switch (item.name) {
          case 'title':
            feedItem['title'] = item.children[0].value.replace(/&#(\d+);/g, (match, dec) => { return String.fromCharCode(dec)});
            break;
          case 'link':
            feedItem['link'] = item.children[0].value;
            break;
          case 'pubDate':
            feedItem['pubDate'] = Date.parse(item.children[0].value);
            break;
          case 'dc:date':
            feedItem['pubDate'] = Date.parse(item.children[0].value);
            break;
          case 'description':
            imagePaths = getImagePath(item.children[0].value);
            if(imagePaths !== null && feedItem['image'] !== null) {
              feedItem['image'] = imagePaths;
            }

            let withoutTags = item.children[0].value.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'').replace(/&nbsp;|\t|\n/g, '');
            feedItem['description'] = withoutTags.replace(/&#(\d+);/g, (match, dec) => { return String.fromCharCode(dec)});
            break;
          case 'content:encoded':
            imagePaths = getImagePath(item.children[0].value);
            if(imagePaths !== null && feedItem['image'] !== null) {
              feedItem['image'] = imagePaths;
            }

            feedItem['content'] = item.children[0].value;
            break;
          default:
            break;
        }
      });

      feedItem['siteName'] = siteName;
      // console.log('Feed Item:', feedItem);
      feeds.push(feedItem);
      feedItem = {};
    }
  });

  return feeds;
};
