function Form (){
    return (
        <div>
            <div classname="flex">
                <div classname="flex-col justify-center items-center">
<label> Nome do Proprietário </label>
<input type="text" placeholder="Seu Nome"/>
</div>
<div classname="flex-col justify-center items-center">
<label>Seu carro</label>
<input type="text" placeholder="Seu Carro"/>
</div>
<button>Proxímo</button>
</div>
        </div>
    );
}

export default Form
