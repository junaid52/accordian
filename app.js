const button = document.querySelectorAll('button');
            const paragraph = document.querySelectorAll('.paragraph');
            
            let index;
            // converting nodelist to array
            const buttonArray = Array.prototype.slice.call(button);
            const paragraphArray = Array.prototype.slice.call(paragraph);
            // attaching eventlisteners to buttons
            for(let i = 0; i < buttonArray.length; i++) {
                
                buttonArray[i].addEventListener('click', (e) => {
                    
                    // get index of current button which is clicked
                    
                    index = buttonArray.indexOf(e.target);
                    // checking if paragraph of same index as button is block if so change it to none
                    if(paragraphArray[index].style.display === 'block') {
                    paragraphArray[index].style.display = 'none';
                    }
                    else {
                        // checking if any previous paragraph is block is so change it to none
                        for(let i = 0; i < paragraphArray.length; i++) {
                            if(paragraphArray[i].style.display === 'block') {
                                paragraphArray[i].style.display = 'none';
                            };
                        };
                        
                            
                            paragraphArray[index].style.display = 'block';
                            
                            
                        
                          
                    }
                   
                });
            };