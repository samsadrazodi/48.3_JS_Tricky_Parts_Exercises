function createAccount(pin, amount=0) {
    return {
        checkBalance(inputPin){
            if(inputPin === pin){
                return `$${amount}`
            }else{
                return 'Invalid PIN.'
            }
        },
        deposit(inputPin, amt){
            if(inputPin === pin){
                amount +=amt;
                return `Succesfully deposited $${amt}. Current balance: $${amount}.`
            }else{
                return 'Invalid PIN.'
            }
        },
        withdraw(inputPin,amt){
            if(inputPin=== pin){
                if(!amt) return 'Enter Withdrawal Amount.';
                if(amt > amount) return 'Withdrawal amount exceeds account balance. Transaction cancelled.';
                amount -= amt;
                return `Succesfully withdrew $${amt}. Current balance: $${amount}.`

                
            }else{
                return 'Invalid PIN.'
            }
        },
                           
        changePin(inputPin, newPin){
            if(inputPin === pin){
                //console.log('currpi',pin)
                pin=newPin 
                return 'PIN successfully changed!'
            }else{
                return 'Invalid PIN.'
            }
                
    }

}
}

module.exports = {createAccount};