import styled from 'styled-components/native';

export const TextFlat = styled.Text`
font-size: 17px;
color:black;
`;


export const ViewRowTop = styled.View`
flex-direction:row;
`
// fontSize: 20,marginLeft:'25%', textAlign: 'center', textAlignVertical: 'center'
export const TextTop = styled.Text`
font-size: 20px;
text-align:center;
margin-left: 20%;
`;

// ${props => props.primary
export const MenuButton = styled.TouchableOpacity`
width: 50px;
height: 50px;
`;

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
// ${props => props.primary
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

//details 

export const ViewRowDetails = styled.View`
flex-direction: row;
`

export const TextDescription =  styled.Text`
font-size:20px;
margin-top:10px;
`

export const ButtonLink = styled.TouchableOpacity`
left: 10px;
height: 50px;
align-items: center;
justify-Content: center;
`;


export const TextLink =  styled.Text`
color: blue;
font-size:18px
`