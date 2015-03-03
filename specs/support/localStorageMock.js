var mock = (function() {
    var basket = {};
        return {
            getItem: function(key) {
            return basket[key];
        },
        setItem: function(key, value) {
            basket[key] = value.toString();
        },
        clear: function() {
            basket = {};
        }
    };
  })();
  
Object.defineProperty(window, 'localStorage', { value: mock });
