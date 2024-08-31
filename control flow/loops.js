// for 

let array = [1,2,3,4,5];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}

// break and continue

for (let index = 0; index <= 10; index++) {
    if(index == 5){// break the loop
        break;
    }
    if(index == 4){//skip the iteration
        continue;
    }
    console.log(index);
}

// while

let index=0;
while(index<2){
    console.log(index);
    index++;
}

