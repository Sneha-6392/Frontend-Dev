const user = {
    name: "Sneha",
    showName: () => {
        console.log(this.name);
    }
};
user.showName();
console.log("Arrow functions do not have their own this. They take this from the parent (lexical scope).");

const userCorrect = {
    name: "Sneha",
    showName: function() {
        console.log(this.name);
    }
};
userCorrect.showName();