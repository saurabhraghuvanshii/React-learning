import ComponentC from "./ComponentC"

const ComponentB = (props) => {
  return (
    <div>
        <h1>ComponetB</h1>
        <ComponentC user={props.user}/>
    </div>
  )
}

export default ComponentB