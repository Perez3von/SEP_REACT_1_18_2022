

class myArray{


    constructor(array){
        this.arr = array;
    }


    map(callback){

        let res_arr = [];
        
        for(let i = 0; i < this.arr.length; i++){
        
            res_arr.push(callback(this.arr[i]));
        }
        return res_arr;
        }

    filter(callback){

        let res_arr = [];
        
        for(let i = 0; i < this.arr.length; i++){
        let bool = callback(this.arr[i]);

        if(bool){
            res_arr.push(this.arr[i]);
        }
            
        }
        return res_arr;
        }
    

    reduce(callback){
        let sum = 0;

        for(let i = 0; i < this.arr.length; i++){
        
            sum = callback(sum, this.arr[i]);
        }

        return sum;

    }

    some(callback){

        for(let i = 0; i < this.arr.length; i++){
        
            let bool = callback(this.arr[i])
            if(bool){
                return true;
            }
        }
        return false;
    }


    every(callback){

        for(let i = 0; i < this.arr.length; i++){
            
            let bool = callback(this.arr[i])
            if(!bool){
                return false;
            }
        }
        return true;
    }

}














