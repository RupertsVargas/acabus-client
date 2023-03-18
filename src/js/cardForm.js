import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';

const arrayCost = [
    {sign:"$",value:"10"},
    {sign:"$",value:"20"},
    {sign:"$",value:"30"},
    {sign:"",value:"otro"},
    ];

    const cardsJson = [
        {id:"045754AAC66880",  trade:[{id:1,type:0,value:"-10"}]},
        {id:"045754AAC66881",  
            trade:[ {id:1,type:1,value:"10"},
                    {id:2,type:1,value:"10"}
                ],
    
    },
        {id:"045754AAC66883",  
            trade:[{id:1,type:0,value:"-10"},
                    {id:2,type:1,value:"10"}

        ]},
        ];

console.log(JSON.stringify(cardsJson));

function SubmitCashCard(){
    let test = null;
                    // test = fetch(urlFetch , {
                    //     method: 'POST',
                    //     // mode: 'cors',
                    //     // body: JSON.stringify({ 'parametro': 23 }),
                    //     body:dataParam,
        
                    //     })
                        
                    //     .then((response) => response.json() )
                    //     .then((json) => {
                    //     dataUsersGlobal = json;
                    //     console.log(dataUsersGlobal);
                    //     if(dataUsersGlobal.error){
                    //         return false;
                    //         }
                            
                    
                
                    //     }).catch(error => {}

                    // );
}

function BasicExample() {
    const [inputAnother, setInputAnother] = React.useState([]);
    const [formValue,setFormValue]= React.useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        let idCard = (e.target[0].value);
        let cash = formValue;
        console.log(cash);

        let jsonSet = JSON.stringify({id:idCard,money:cash});
        // let jsonSet = ({id:idCard,money:cash});
        let test = null;

        
        // return false;

        let urlFetch = "http://localhost:3001/paypal";
            test = await fetch(urlFetch , {
                        method: 'POST',
                        // mode: 'cors',
                        // body: JSON.stringify({ 'parametro': 23 }),
                        headers: {
                            'Content-Type': 'application/json'
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        

                        body:jsonSet,
        
                        })
                        
                        .then((response) => response.json() )
                        .then((json) => {
                            console.log(json);
                        // dataUsersGlobal = json;
                        // console.log(dataUsersGlobal);
                        // if(dataUsersGlobal.error){
                        //     return false;
                        //     }
                            
                    
                
                        }).catch(error => {
                            console.log(error);
                        }
                            
                    );
                    console.log(test);

    }
    return (
        <Form   onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Number Card</Form.Label>
            <Form.Control required type="text" placeholder="Enter number card" />
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text> */}
        </Form.Group>
        {
        arrayCost.map((type,count)=> 
        // type = type !== "otro" ?  "$"+typeç

            // console.log(count),
            (<Form.Check
            // disabled
            key = {"radios"+count}
            name="group-money"
            type={"radio"}
            value={type.value}
            required
            label={type.sign+type.value}
            id={`idCost${count}`}
            onClick = {(e)=>{

                let value = e.target.value;
                if(value==="otro"){
                    // value = 
                    setInputAnother([true])
                }else{
                    setInputAnother([])
                }

                setFormValue(value);
            }}

        />)

            // console.log(type);
        
        )
        }
            {inputAnother.map((type) => (

                <Form.Group key="cash0" className="mb-3" controlId="formAnotherCredit">
                        <Form.Label>Dinero a Poner</Form.Label>
                        <Form.Control 
                        onChange={(e)=>{
                            let value = e.target.value;
                            setFormValue(value);
                            // console.log(e.target.value);  
                        }}
                        required type="number" placeholder="Enter credit" />
                    
                </Form.Group>

            ) )}
            
    
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
    );
}

export default BasicExample;