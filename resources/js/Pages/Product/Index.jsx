import React from "react";
import { Link } from "@inertiajs/react";
import { router } from '@inertiajs/react'
import Toast from "../../components/Toast";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Index(props) {
    const { flash, products } = props

    const handleDelete = (id) => {
        if(!confirm("Deseja realmente excluir o produto?")) return
        router.delete(`/products/${id}`)
    }

    return(
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <div className="base-container">
                <Toast flash={flash}/>
                <h1 className="main-title">Lista de Produtos</h1>

                <div className="px-8 py-4 flex gap-2">
                    <Link className="btn bg-green-600" href="products/create" type="button">Novo</Link>
                    <a className="btn bg-gray-500" href="/pdf" target="_blank" rel='noopener noreferrer'>Gerar PDF</a>
                </div>

                <div className="flex px-8 gap-4 flex-wrap w-full">
                    {products?.map((product) => (
                        <div key={product.id} className="border border-gray-500 rounded-lg p-4 bg-gray-200 w-80 h-48">
                            <h2 className="text-xl font-semibold">{product.name}</h2>
                            <p className="overflow-y-auto h-[60%] w-fit">{product.desciption}</p>

                            <div className="pt-2 flex items-center justify-end gap-2">
                                <Link className="btn bg-gray-400" href={`products/${product.id}/`} type="button">Visualizar</Link>
                                <Link className="btn bg-blue-400" href={`products/${product.id}/edit`} type="button">Editar</Link>
                                <button className="btn bg-red-400 text-white font-semibold" onClick={() => handleDelete(product.id)} >Excluir</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
