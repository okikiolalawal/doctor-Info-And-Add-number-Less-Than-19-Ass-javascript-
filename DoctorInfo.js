var Doctor =
{
    firstname:"Jafar",
    lastname :"lawal",
    age : 53,
    address :"FMC,idi-Aba",
    email:"okikiolalawal@gmail.com",
    displayName:function()
    {
        return this.firstname +" " + this.lastname;
    },
    displayAge:function()
    {
        let newage = 16
        return this.age + newage
    }
}
console.log(Doctor.displayName());
console.log(Doctor.displayAge());