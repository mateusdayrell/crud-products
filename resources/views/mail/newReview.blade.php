<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Nova avaliação</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f1f1f1;
        }
        .container {
            margin: 0 auto;
            max-width: 600px;
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
        }
        h1 {
            font-size: 28px;
            margin-bottom: 20px;
        }
        p {
            font-size: 16px;
            margin-bottom: 10px;
        }
        .signature {
            font-size: 14px;
            font-style: italic;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>O seu produto recebeu uma nova avaliação!</h1>
        <p>O seu produto {{ $productName }} recebeu uma avaliação de nota {{ $rating }}.</p>
        <p>Acesse o sistema para conferir mais detalhes sobre essa nova avaliação.</p>
        <p class="signature">Atenciosamente,</p>
        <p class="signature">Crud Product.</p>
    </div>
</body>
</html>
