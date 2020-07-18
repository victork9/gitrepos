import styled from 'styled-components/native';

// export const Container = styled.`

// `;


export const ViewRepos = styled.View`
 background-color:#fff;
width:90%;
border-radius: 10px;
border-width:1px;
border-color:#000;
height: 150px;
margin-top:10px;
align-self:center;
`
export const ViewRowReposa = styled.View`
flex-direction: row;
padding:5px;
`
export const DetailButton = styled.TouchableOpacity`
    background-color:#000;
    width: 50%;
    height: 40px;
    align-items: center;
    align-self: center;
    justify-Content: center;
    margin-top:20px;
    `;

//login
export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-Content: center;
    `;

export const Input = styled.TextInput`
    width: 80%;
    height: 50px;
    border-width:1px;
    border-color: grey;
    font-size:17px;
    padding:5px;
    `;

export const Button = styled.TouchableOpacity`
    background-color:#000;
    width: 50%;
    height: 40px;
    align-items: center;
    justify-Content: center;
    margin-top:20px;
    `;