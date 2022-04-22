import React from "react";

class AltaProducto extends React.Component{
    constructor(){
        super();
        this.state={
            cantProducto:0,
            precio:0,
            metodo1:false,
            metodo2:false,
            destino:'',
            categoria:'',
            descuento:0,
            total:0,
            llegada:''
        }

        this.valoresFormulario = this.valoresFormulario.bind(this);
        this.pagar = this.pagar.bind(this);
        this.totalPagar = this.totalPagar.bind(this);
    }

    valoresFormulario=({name,value,checked,type})=>{
        this.setState(()=>{
            return{[name]: type==="checkbox" ? checked:value};
        });
    };

    pagar(e){
        switch(this.state.categoria){
            case 'cosmeticos': return this.setState({descuento:parseInt(this.state.precio) * 0.15})                 
            break;  
            case 'fragancias': return this.setState({descuento:parseInt(this.state.precio) * 0.20})
            break;  
            case 'piel': return this.setState({descuento:parseInt(this.state.precio) * 0.25})
            break;      
        }

    }   

    totalPagar(e){
        this.setState({total:parseInt(this.state.precio) - parseInt(this.state.descuento)})

        if (this.state.destino === "Toluca"){
            this.setState({llegada:'LLega hoy mismo'})
        }
        if (this.state.destino === "Metepec"){
            this.setState({llegada:'LLega mañana'})
        }
        if (this.state.destino === "Otzolotepec"){
            this.setState({llegada:'LLega en 3 días'})
        }
        if (this.state.destino === "Lerma"){
            this.setState({llegada:'LLega en 1 semana'})
        }    
    }

    
    render(){
        return(
            <div className="container mt-5">
                <form>
                    <div className="mb-3">
                        <label className="form-label">¿Cuantos productos?</label>
                        <input type="text" name="cantProducto" className="form-control" id="productos" 
                        onKeyUp={event=>this.valoresFormulario(event.target)}/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Precio del producto</label>
                        <input type="text" name="precio" className="form-control" id="precio"
                        onKeyUp={event=>this.valoresFormulario(event.target)}/>
                    </div>
                    <div className="mb-3">
                    <label  className="form-label">Selecciona la categoria  </label>
                    <select name="categoria" className="form-select" aria-label="Default select example"
                    onChange={event=>this.valoresFormulario(event.target)}>
                        <option value={"default"}>...</option>
                        <option value={"cosmeticos"}>Cosmeticos</option>
                        <option value={"fragancias"}>Fragancias</option>
                        <option value={"piel"}>Cuidado de la piel</option>
                    </select>
                    </div>
                    <div className="mb-3">
                    <label  className="form-label">Método de pago </label>
                    <div className="form-check form-check">
                        <input className="form-check-input" type="checkbox" name="metodo2" id="inlineCheckbox1" value={"efectivo"}
                        onChange={event=>this.valoresFormulario(event.target)}/>
                            <label className="form-check-label" >Efectivo</label>
                    </div>
                    <div className="form-check form-check">
                        <input className="form-check-input" type="checkbox" name="metodo1" id="inlineCheckbox2" value={"tarjtea"}
                        onChange={event=>this.valoresFormulario(event.target)}/>
                            <label className="form-check-label" >Tarjeta</label>
                    </div>
                    <div className="mb-3">
                    <label  className="form-label">Seleccione el destino </label>
                        <div className="form-check form-check">
                            <input className="form-check-input" type="radio" name="destino" id="inlineRadio1" defaultValue={"Toluca"} 
                            onChange={event=>this.valoresFormulario(event.target)}/>
                                <label className="form-check-label" >Toluca</label>
                        </div>
                        <div className="form-check form-check">
                            <input className="form-check-input" type="radio" name="destino" id="inlineRadio2" defaultValue={"Metepec"}
                            onChange={event=>this.valoresFormulario(event.target)}/>
                                <label className="form-check-label">Metepec</label>
                        </div>
                        <div className="form-check form-check">
                            <input className="form-check-input" type="radio" name="destino" id="inlineRadio2" defaultValue={"Otzolotepec"}
                            onChange={event=>this.valoresFormulario(event.target)}/>
                                <label className="form-check-label" >Otzolotepec</label>
                        </div>
                        <div className="form-check form-check">
                            <input className="form-check-input" type="radio" name="destino" id="inlineRadio2" defaultValue={"Lerma"}
                            onChange={event=>this.valoresFormulario(event.target)}/>
                                <label className="form-check-label" >Lerma</label>
                        </div>
                    </div>
                    </div>
                    <div>
                    <button type="button" value="descuento" className="btn btn-dark" onClick={this.pagar}>Aplicar descuento</button>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Descuento</label>
                        <input type="text" name="descuento" className="form-control" value={this.state.descuento} />
                    </div>
                    <button type="button" className="btn btn-primary" value="total" onClick={this.totalPagar}>Calcular total a pagar</button>
                    <div className="mb-3">
                        <label  className="form-label" >Total</label>
                        <input type="text" name="total" className="form-control" id="total" value={this.state.total} />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label" >Tu pedido llega en:</label>
                        <input type="text" name="total" className="form-control" id="total" value={this.state.llegada} />
                    </div>
                    <div className="mb-3">
                    <a href="/">
                    <button type="button" className="btn btn-success" >Volver al inicio</button>
                    </a>
                    </div>
                </form>               
            </div>
        )
    }
}

export default AltaProducto