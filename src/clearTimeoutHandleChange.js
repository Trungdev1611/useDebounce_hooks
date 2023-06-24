  function handleChange(e) {
    console.log(e.target.value, e.target.name);


    if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
  
      // Tạo một timeout mới để chờ khoảng thời gian debounce (vd: 300ms)
      timeoutIdRef.current = setTimeout(() => {
        console.log("timeoutclear vẫn vào đay")
        setParams({
          ...params,
          [e.target.name]: e.target.value,
        });
      }, 300);
      console.log(timeoutIdRef.current)
  }
