class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

MovieTicket.prototype.printTicket = function () {
    console.log("MOVIE TICKET-: ");
    console.log(`Movie: ${this.movieName}`);
    console.log(`Seat No: ${this.seatNo}`);
    console.log(`Base Price: ₹${this.price}`);
};


class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }
    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

const ticket1 = new OnlineTicket("Harry Potter", "A12", 250, 30);
console.log("Total Amount:", ticket1.getTotalAmount());


ticket1.printTicket(); 
