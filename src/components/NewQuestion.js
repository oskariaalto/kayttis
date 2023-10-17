import Card from './ui/cards/Card';
import CardTitle from './ui/cards/CardTitle';
import CardBody from './ui/cards/CardBody';
import { TextInput } from './forms/TextInput';
import { ChooseCourse } from './forms/ChooseCourse';

export const NewQuestion = () => {
  return(
    <Card>
      <div className='flex'>
        <div className='w-7/12'>
          <CardTitle cardstyle='primary' >New Question</CardTitle>
        </div>
        <ChooseCourse/>
      </div>
      <CardBody> 
        <TextInput placeholder='Ask a new question'/>
      </CardBody>
    </Card>
  )}




  