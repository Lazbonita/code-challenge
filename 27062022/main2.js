
// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%




function calculateTip(amount, rating) {
    switch(rating.toLowerCase()){
        case 'excellent':
        return Math.ceil(0.2*amount)
        break;
        
        case 'great':
        return Math.ceil(0.15*amount)
        break;
        
        case 'good':
        return Math.ceil(0.1*amount)
        break;
        
        case 'poor':
        return Math.ceil(0.05*amount)
        break;
        
        case 'terrible':
        return 0
        break;
        
        default:
        return 'Rating not recognised'
        break;
    }
    }



