import React from "react";
import Input from './Calculator'

class Buttons extends React.Component{
    render(){
        return <div>
            <Input/>
            <table align="center">
                <tbody>
                    <tr>
                        <td><button>9</button></td>
                        <td><button>8</button></td>
                        <td><button>7</button></td>
                        <td><button>+</button></td>
                    </tr>
                    <tr>
                        <td><button>6</button></td>
                        <td><button>5</button></td>
                        <td><button>4</button></td>
                        <td><button>-</button></td>
                    </tr>
                    <tr>
                        <td><button>3</button></td>
                        <td><button>2</button></td>
                        <td><button>1</button></td>
                        <td><button>/</button></td>
                    </tr>
                    <tr>
                        <td><button>*</button></td>
                        <td><button>%</button></td>
                        <td><button>.</button></td>
                        <td><button>=</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    }
}
export default Buttons;