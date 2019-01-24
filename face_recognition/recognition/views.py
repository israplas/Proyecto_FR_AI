#!/usr/bin/python

from django.shortcuts import render

# Create your views here.
def home(request):
    greeting = "hola fulanito"
    if request.method == "GET":
        return render({"greet":greeting},"index.html")


def upload_file(request):
    if request.method == "POST":
            path = request.data['path']
            fname = request.data['nombre_carpeta']
            exec("cp -r %s ../proyecto_ai/%s/" %(path, fname))

def train(request):
     exec("python3 extract_embeddings.py --dataset dataset --embeddings output/embeddings.pickle --detector face_detection_model --embedding-model openface_nn4.small2.v1.t7 ")

