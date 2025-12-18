//export const initialState = {
const initialState = {
  count: 0,
  nama: "",
  age: "",
  email: "",
  isActive: false,
  theme: "light",
};

//export function reducer(state, action) {
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "setNama":
      return { ...state, nama: action.payload };
    case "setEmail":
      return { ...state, email: action.payload };
    case "setAge":
      return { ...state, age: action.payload };
    case "toggleActive":
      return { ...state, isActive: !state.isActive };
    case "toggleTheme":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
		case "setAll":
			return {...action.payload}
    default:
      return state;
  }
}

export {initialState, reducer}