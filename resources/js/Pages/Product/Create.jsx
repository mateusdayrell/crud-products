import React from "react";
import { Link } from "@inertiajs/react";
import { useForm } from '@inertiajs/react';
import Toast from "../../components/Toast";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Create(props) {
    const { flash } = props

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        description: '',
        price: '',
        quantity: '',
    })

    const handleSubmit = async () => {
        post("/products")
        reset()
    }

    return(
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <div className="base-container">
                <Toast flash={flash}/>
                <h1 className="main-title">Novo Produto</h1>
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
                        <small className="error">{errors.content}</small>
                    </div>
                    <div className="input-area">
                        <label htmlFor="price">Preço</label>
                        <input
                            type="number"
                            id="price"
                            value={data.price}
                            onChange={e => setData('price', e.target.value)} />
                        <small className="error">{errors.price}</small>
                    </div>
                    <div className="input-area">
                        <label htmlFor="quantity">Quantidade</label>
                        <input
                            type="number"
                            id="quantity"
                            value={data.quantity}
                            onChange={e => setData('quantity', e.target.value)} />
                        <small className="error">{errors.quantity}</small>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <Link href="/products" className="btn bg-green-600">Voltar</Link>
                        <button onClick={handleSubmit} className="btn bg-gray-400" disabled={processing}>Cadastrar</button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
