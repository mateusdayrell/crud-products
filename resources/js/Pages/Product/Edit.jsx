import React from "react";
import { Link, useForm } from "@inertiajs/react";
import Toast from "../../components/Toast";

export default function Edit(props) {
    const { flash } = props

    const { data, setData, put, processing, errors } = useForm({
        name: props.product.name || '',
        description: props.product.description || '',
        price: props.product.price || '',
        quantity: props.product.quantity || '',
    })

    const handleSubmit = () => put(`/products/${props.product.id}`)

    return(
        <div className="base-container">
            <Toast flash={flash}/>
            <h1 className="main-title">Editar Produto</h1>
            <div className="input-container">
                <div className="input-area">
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        id="name"
                        value={data.name}
                        onChange={e => setData('name', e.target.value)} />
                    <small className="error">{errors.name}</small>
                </div>
                <div className="input-area">
                    <label htmlFor="description">Descrição</label>
                    <textarea
                        name="description"
                        id="description"
                        value={data.description}
                        onChange={e => setData('description', e.target.value)}
                        cols="30"
                        rows="3"/>
                    <small className="error">{errors.description}</small>
                </div>
                <div className="input-area">
                    <label htmlFor="price">Preço</label>
                    <input
                        type="text"
                        id="price"
                        value={data.price}
                        onChange={e => setData('price', e.target.value)} />
                    <small className="error">{errors.price}</small>
                </div>
                <div className="input-area">
                    <label htmlFor="quantity">Quantidade</label>
                    <input
                        type="text"
                        id="quantity"
                        value={data.quantity}
                        onChange={e => setData('quantity', e.target.value)} />
                    <small className="error">{errors.quantity}</small>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <Link href="/products" className="btn bg-gray-400">Voltar</Link>
                    <button className="btn bg-green-600" onClick={handleSubmit} disabled={processing}>Atualizar</button>
                </div>
            </div>
        </div>
    )
}
