import XmlReader from 'xml-reader';

export const xmlParser = xml => {
  const reader = XmlReader.create();
  let parsedData = {};

  reader.on('done', data => {
    parsedData = data.children[0].children;
  });

  reader.parse(xml);

  return parsedData;
}
