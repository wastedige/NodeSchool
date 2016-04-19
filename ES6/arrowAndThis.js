var foot = {
    kick: function () {
        this.yelp = "Ouch!";
        setImmediate( () => console.log(this.yelp) );
    }
};
foot.kick();

// passing 'this' to function in ES5
// setImmediate(function () {
//     console.log(this.yelp);
// }.bind(this));
