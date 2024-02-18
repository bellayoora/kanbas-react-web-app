import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput";
import DynamicStyling from "./Styles";
import JavascriptFunctions from "./JavaScript";
import PathParameters from "./routing/PathParameters";
import Styles from "./Styles";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";

function Assignment3() {
  return (
    <div>
      <h1>Assignment 3</h1>
      <TodoList/>
      <TodoItem/>
      <ConditionalOutput/>
      <Styles/>
      <Classes/>
      <JavascriptFunctions />
      <PathParameters/>
      <DynamicStyling/>
    </div>
  );
}

export default Assignment3;
