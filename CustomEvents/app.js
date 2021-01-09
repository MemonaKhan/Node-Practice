var event = require('events');
var emmiter = new event.EventEmitter();

emmiter.on('learn',function(sub){
    console.log('I am Learning ',sub);
});

emmiter.emit('learn','node');