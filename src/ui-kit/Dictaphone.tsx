import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useNavigate } from 'react-router-dom'

import { paths } from '../utils/pages'

import { styled, theme } from '../global-styles'
import soundUrl from "../utils/sounds/please.mp3";
import soundFind from "../utils/sounds/find.mp3";
import soundHi from "../utils/sounds/hi.mp3";
import { useEffect, useState } from 'react';
import { Button } from './Button';

const Text = styled.div`
  border: 0;
  outline: 0;
  padding: 0;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
  color: black;
`
function play(sound : any) {
  new Audio(sound).play()
}

export const Dictaphone = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState(0);
    useEffect(() => {
      console.log(value)
      if (value === 2){
        play(soundFind)
        navigate(paths.info);
      }
      if (value === 1){
        play(soundHi)
      }
    }, [value])
    //   type Icommand = {
    //     command: string,
    //     callback: ({ resetTranscript }: { resetTranscript: any; }) => any
    //   }

      type IcommandOpen = {
        command: string,
        callback: (site: any) => void
      }

        const commands : IcommandOpen[]= [
            {
                command:'покажи информацию',
                callback: () => {setValue(2) }
            },
            {
                command:'привет',
                callback: () => (setValue(1))
            },
            {
              command:'покажи медиа',
              callback: () => navigate(paths.media)
            }
        ]

        const {
            transcript,
            listening,
            resetTranscript,
            browserSupportsSpeechRecognition
          } = useSpeechRecognition({commands});
 

  if (!browserSupportsSpeechRecognition) {
    return <Text>Browser doesn't support speech recognition.</Text>;
  }

  const StyledButton = styled(Button)`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background-color: ${theme.palette.main};
`

const StyledButtonStop = styled(StyledButton)`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background-color: ${theme.palette.grayDark};
`

  return (
    <div>
      <StyledButton onClick={(e: any) => SpeechRecognition.startListening({continuous: true, language: 'ru-RU'})}>

      </StyledButton>

      <StyledButtonStop onClick={SpeechRecognition.stopListening}>
        
      </StyledButtonStop>
    </div>
  );
};
export default Dictaphone;