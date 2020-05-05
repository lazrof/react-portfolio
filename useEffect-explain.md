``useEffect()`` se activa cuando el componente se actualiza ( o sea el estado del componente se actualiza)
pero podemos condicionar cuando esto sucede. Diciendole en el segundo parametro, que valor es el que debe escuchar, para el activarse.

Es decir, si yo tengo un estado:
```
const [values, handleChange] = useForm({ email:"", password:"" });

useEffect(() => {
    console.log("render")
}, [values.password])
```

En este caso `handleChange` viene siendo el **setState** de este componente, cuando `handleChange` se ejecuta, inmediatamente despues de se va a ejecutar `useEffect()`, pero solo si en el `handleChange` el **value.password** es el que va cambiar, porque en nuestro `useEffect()` asi se lo especificamos en el segundo parametro.


Si el segundo parametro esta vacio `useffect(function..., [])`, useffect solo se activará una vez. 

Para Reemplazar **componentDidAmount** o **componentDidUnmount** debemos.