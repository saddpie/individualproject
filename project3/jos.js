var a = 0;

var app = new Vue({
    el: '#app',
    data: {
        msage: ['About Me', 'My Skills', 'Contact Me'],
        elm: 'About Me',
        image2: ["1.jpg", "2.jpg", "3.png"],
        image1: '1.jpg',
        show: true,
        dom: false
    },
    methods: {
        Pi2: function() {
            a++;
            if (a > this.msage.length - 1) {
                a--;
            }
            this.elm = this.msage[a];
            this.image1 = this.image2[a];
            console.log(this.show);

            setInterval
            setTimeout(() => {
                this.show = true;
                image1 = this.image2[a];
                console.log(this.show);
            }, 1000);


        },

        Pi: function() {
            a--;
            if (a < 0) {
                a++;
            }
            this.elm = this.msage[a];
            this.image1 = this.image2[a];
            setTimeout(() => {
                this.show = true;
                image1 = this.image2[a];
                console.log(this.show);
            }, 1000);

            if (a == 0) {
                this.dom = true;
                href = "aa.png";
            } else {
                this.dom = false;
            }
        },

        scrollMeTo(refName) {
            var element = this.$refs[refName];
            var top = element.offsetTop;

            window.scrollTo(0, top);
        }

    },

})