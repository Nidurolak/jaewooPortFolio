import { useRef } from 'react';

//hook
function ScrollHook() {
  const element = useRef<HTMLDivElement>(null);
  const onMoveToElement = () => {
    element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return { element, onMoveToElement};
}

export default ScrollHook;