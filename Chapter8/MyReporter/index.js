function MyCustomNewmanReporter (newman, reporterOptions, collectionRunOptions) {
   
    newman.on('start', function (err) {
        if (err) { return; }
        console.log('Collection run starting')
        console.log(collectionRunOptions)
    });

    newman.on('item', function (err,args) {
        console.log('Running: '+args.item.name)
        console.log('test complete')
    });

    newman.on('done', function () {
        console.log('all done!')
    });
  };
module.exports = MyCustomNewmanReporter