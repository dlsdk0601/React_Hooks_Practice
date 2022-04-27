import "./App.css";
import { UseInput } from "./useinput";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};

function App() {
  const maxLen = (value) => !value.includes("@"); //@가 문자열에 포함되면 !true =false가 리턴됨. 즉 @ 치면 더이상 업데이트 안함

  const name = UseInput("Mr.", maxLen); //useInput 이라는 함수가 객체를 리턴함

  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}

export default App;
