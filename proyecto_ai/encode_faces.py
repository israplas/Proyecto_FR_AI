from imutils import paths
import face_recognition
import argparse
import pickle
import cv2
import os

#construir el analizador de argumentos y analizar los argumentos
ap = argparse.ArgumentParser()

ap.add_argument("-i", "--dataset", required=True, help="Ruta al directorio de entrada de caras + imágenes")
ap.add_argument("-e", "--encodings", required=True, help="Ruta a db serializada de codificaciones faciales.")
ap.add_argument("-d", "--detection-method", type=str, default="hog", help="Modelo de detección de rostro para usar: ya sea `hog` o` cnn`")

args = vars(ap.parse_args())

# Agarra los caminos a las imágenes de entrada en nuestro conjunto de datos
print("[INFO] cuantificando caras...")
imagePaths = list(paths.list_images(args["dataset"]))

# Inicializar la lista de codificaciones conocidas y nombres conocidos.
knownEncodings = []
knownNames = []

# recorrer las rutas de la imagen
for(i, imagePath) in enumerate(imagePaths):
    # extraer el nombre de la persona de la ruta de la imagen
    print("[INFO] procesando imagen {}/{}".format(i+1, len(imagePaths)))
    name = imagePath.split(os.path.sep)[-2]

    # cargar la imagen de entrada y convertila de BGR a RGB
    image = cv2.imread(imagePath)
    rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

    # detectar las coordenadas (x, y) correspondiente a cada cara en la imagen de entrada
    boxes = face_recognition.face_locations(rgb,
		model=args["detection_method"])

    # calcular la incrustación facial para la cara
    encodings = face_recognition.face_encodings(rgb, boxes)

    # bucle sobre las codificaciones
    for encoding in encodings:
        # agregue cada codificación + nombre a nuestro conjunto de nombres conocidos y codificaciones
        knownEncodings.append(encoding)
        knownNames.append(name)

# volcar las codificaciones faciales + nombres en el disco
print("[INFO] serializing encodings...")
data = {"encodings": knownEncodings, "names": knownNames}
f = open(args["encodings"], "wb")
f.write(pickle.dumps(data))
f.close()
