import styled from 'styled-components/native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #9ad0f5;
`;

export const SecondaryBackground = styled.View`
  width: 100%;
  height: 85%;
  border-radius: 20px;
  background: #fffffc;
  margin-top: 10%;

  flex-direction: column;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-family: Roboto_700Bold;
  text-align: center;
  max-width: 165px;
  margin-top: 62px;
`;

export const Separator = styled.View`
  width: 280px;
  height: 1px;
  margin-top: 35px;
  background: #4f4f4f;
`;

export const RegisterTextContainer = styled(BorderlessButton)`
  margin-top: 30px;
`;

export const Register = styled.Text`
  font-family: Roboto_400Regular;
  color: #4f4f4f;
  font-size: 16px;
  text-decoration: underline;
`;

export const IconContainer = styled.View`
  width: 150px;
  margin-top: 38px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.Image``;

export const RegisterText = styled.Text`
  font-family: Roboto_400Regular;
  font-size: 16px;
  color: #4f4f4f;
`;

export const FacebookButton = styled(RectButton)``;

export const GoogleButton = styled(RectButton)``;
