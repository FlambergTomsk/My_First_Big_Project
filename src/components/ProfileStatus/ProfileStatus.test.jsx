import ProfileStatus from "./ProfileStatus"
import renderer from 'react-test-renderer';


describe('ProfileStatus component', ()=>{
test ('after creation <span> should be displayed with correct status', ()=>{
  const component = renderer.create(<ProfileStatus status = 'my-first-big-project'/>);
  const root = component.root;
  let span = root.findByType('span');
  expect(span.length).not.toBeNull();
  })
})
