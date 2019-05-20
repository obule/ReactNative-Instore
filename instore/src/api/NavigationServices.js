import { NavigationActions } from "react-navigation";

let _navigator;

function setTopLevel(ref) {
  _navigator = ref;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function Back() {
  _navigator.dispatch(NavigationActions.back());
}

function popToTop(immediate = true) {
  _navigator.dispatch({
    type: NavigationActions.POP_TO_TOP,
    immediate,
  });
}

function reset({ actions, index }) {
  _navigator.dispatch({
    type: NavigationActions.RESET,
    index,
    actions,
  });
}

export const NavigationService = {
  navigate,
  setTopLevel,
  Back,
  popToTop,
  reset,
  navigator: _navigator,
};

window.NavigationService = NavigationService;
