(function() {

  return {
    
    defaultState: 'loading',

    requests: {

    },

    events: {
      'app.activated': 'start'
    },

  
    start: function() {
      
      alert('The app has activated');

      this.displayNames();

    },

    displayNames: function(){
      this.names = ["Stefan", "Jason", "Peter", "Matt", "Michael", "Lachlan"];
      this.accounts = [
        {
          name: "Batman",
          id: 23434123,
          link: "http://www.google.com/"
        },
        {
          name: "Robin",
          id: 435435,
          link: "http://zendesk.com/"
        }
      ];

      this.switchTo('list', {
        namesToDisplay: this.names,
        accounts: this.accounts
      });

    }


  };

}());