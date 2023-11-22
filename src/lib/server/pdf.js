// import muhammara from "muhammara";

// function customizeVoucher(findText, replaceText) {
//     var sourceFile = path.join(__dirname, "../private/vouchers/custom-old.pdf");
//     var link = "/vouchers/cheque-prenda-" + replaceText + ".pdf";
//     var targetFile = path.join(__dirname, "../private" + link);
//     var pageNumber = 0;

//     var writer = muhammara.createWriterToModify(sourceFile, {
//         modifiedFilePath: targetFile,
//         log: path.join(__dirname, "../hummus.md"),
//     });
//     var sourceParser = writer
//         .createPDFCopyingContextForModifiedFile()
//         .getSourceDocumentParser();
//     var pageObject = sourceParser.parsePage(pageNumber);
//     var textObjectId = pageObject
//         .getDictionary()
//         .toJSObject()
//         .Contents.getObjectID();
//     var textStream = sourceParser.queryDictionaryObject(
//         pageObject.getDictionary(),
//         "Contents",
//     );
//     //read the original block of text data
//     var data = [];
//     var readStream = sourceParser.startReadingFromStream(textStream);
//     while (readStream.notEnded()) {
//         Array.prototype.push.apply(data, readStream.read(10000));
//     }
//     console.log(replaceText);
//     var string = new Buffer(data).toString().replace(findText, replaceText);
//     console.log(string);

//     // Create and write our new text object.
//     var objectsContext = writer.getObjectsContext();
//     objectsContext.startModifiedIndirectObject(textObjectId);

//     var stream = objectsContext.startUnfilteredPDFStream();
//     stream.getWriteStream().write(strToByteArray(string));
//     objectsContext.endPDFStream(stream);

//     objectsContext.endIndirectObject();

//     writer.end();

//     return link;
// }

// replaceText('source.pdf', 'output.pdf', 0, /REPLACEME/g, 'My New Custom Text');
