import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useNavigate } from 'react-router-dom'

import { paths } from '../utils/pages'

import { styled } from '../global-styles'

const Text = styled.div`
  border: 0;
  outline: 0;
  padding: 0;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
  color: black;
`

export const Dictaphone = () => {
    const navigate = useNavigate()
    
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
                command:'посмотреть информацию',
                callback: () => navigate(paths.info)
            },
            {
                command:'посмотреть главную',
                callback: () => navigate(paths.home)
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

  return (
    <div>
      <span>Microphone: {listening ? 'on' : 'off'}</span>
      <button onClick={(e: any) => SpeechRecognition.startListening({continuous: true, language: 'ru-RU'})}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <Text>{transcript}</Text>
    </div>
  );
};
export default Dictaphone;