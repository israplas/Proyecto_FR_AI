import face_recognition
import argparse
import pickle
import cv2

# construir el analizador de argumentos y analizar los argumentos
ap = argparse.ArgumentParser()
ap.add_argument("-e", "--encodings", required=True, help="Ruta a db serializada de codificaciones faciales")
ap.add_argument("-i", "--image", required=True, help="camino a la imagen de entrada")
ap.add_argument("-d", "--detection-method", type=str, default="hog", help="vface detection model to use: either `hog` or `cnn`")
args = vars(ap.parse_args())

# cargar las caras conocidas
print("[INFO] loading encodings...")
data = pickle.loads(open(args["encodings"], "rb").read())

# cargar la imagen de entrada y convertirla de BGR a RGB
image = cv2.imread(args["image"])
rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

# detectar las coordenadas (x, y) 0
# de los cuadros delimitadores correspondientes
# a cada cara en la imagen de entrada, luego calcule las incrustaciones faciales
# para cada cara
print("[INFO] recognizing faces...")
boxes = face_recognition.face_locations(rgb,
	model=args["detection_method"])
encodings = face_recognition.face_encodings(rgb, boxes)

# inicializar la lista de nombres para cada cara detectada
names = []

# bucle sobre el fscisl embeddings
for encoding in encodings:
    # Hacer coincidir cada cara de la imagen de entrada con nuestras codificaciones conocidas
    matches = face_recognition.compare_faces(data["encodings"],	encoding)
    name = "Unknown"

    # verifica si hemos encontrado una coincidencia
    if True in matches:
        # encurntrs los índices de todas las caras coincidentes y luego inicializa un 
        # diccionario para contar el número total de veces que coincidio cada cara
        matchedIdxs = [i for (i, b) in enumerate(matches) if b]
        counts = {}
        # circule sobre los índices coincidentes y mantenga un recuento para cada cara reconocida
        for i in matchedIdxs:
            name = data["names"][i]
            counts[name] = counts.get(name, 0) + 1
        # determinar la cara reconocida con el mayor número de votos (nota: en el caso de un empate
        # poco probable, Python seleccionará la primera entrada en el diccionario)
        name = max(counts, key=counts.get)

    #actualiza la listas de nombres
    names.append(name)

# loop over the recognized faces
for ((top, right, bottom, left), name) in zip(boxes, names):
	# draw the predicted face name on the image
	cv2.rectangle(image, (left, top), (right, bottom), (0, 255, 0), 2)
	y = top - 15 if top - 15 > 15 else top + 15
	cv2.putText(image, name, (left, y), cv2.FONT_HERSHEY_SIMPLEX,
		0.75, (0, 255, 0), 2)
 
# show the output image
cv2.imshow("Image", image)
cv2.waitKey(0)

# # USAGE
# # python recognize_faces_image.py --encodings encodings.pickle --image examples/example_01.png 

# # import the necessary packages
# import face_recognition
# import argparse
# import pickle
# import cv2

# # construct the argument parser and parse the arguments
# ap = argparse.ArgumentParser()
# ap.add_argument("-e", "--encodings", required=True,
# 	help="path to serialized db of facial encodings")
# ap.add_argument("-i", "--image", required=True,
# 	help="path to input image")
# ap.add_argument("-d", "--detection-method", type=str, default="cnn",
# 	help="face detection model to use: either `hog` or `cnn`")
# args = vars(ap.parse_args())

# # load the known faces and embeddings
# print("[INFO] loading encodings...")
# data = pickle.loads(open(args["encodings"], "rb").read())

# # load the input image and convert it from BGR to RGB
# image = cv2.imread(args["image"])
# rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

# # detect the (x, y)-coordinates of the bounding boxes corresponding
# # to each face in the input image, then compute the facial embeddings
# # for each face
# print("[INFO] recognizing faces...")
# boxes = face_recognition.face_locations(rgb,
# 	model=args["detection_method"])
# encodings = face_recognition.face_encodings(rgb, boxes)

# # initialize the list of names for each face detected
# names = []

# # loop over the facial embeddings
# for encoding in encodings:
# 	# attempt to match each face in the input image to our known
# 	# encodings
# 	matches = face_recognition.compare_faces(data["encodings"],
# 		encoding)
# 	name = "Unknown"

# 	# check to see if we have found a match
# 	if True in matches:
# 		# find the indexes of all matched faces then initialize a
# 		# dictionary to count the total number of times each face
# 		# was matched
# 		matchedIdxs = [i for (i, b) in enumerate(matches) if b]
# 		counts = {}

# 		# loop over the matched indexes and maintain a count for
# 		# each recognized face face
# 		for i in matchedIdxs:
# 			name = data["names"][i]
# 			counts[name] = counts.get(name, 0) + 1

# 		# determine the recognized face with the largest number of
# 		# votes (note: in the event of an unlikely tie Python will
# 		# select first entry in the dictionary)
# 		name = max(counts, key=counts.get)
	
# 	# update the list of names
# 	names.append(name)

# # loop over the recognized faces
# for ((top, right, bottom, left), name) in zip(boxes, names):
# 	# draw the predicted face name on the image
# 	cv2.rectangle(image, (left, top), (right, bottom), (0, 255, 0), 2)
# 	y = top - 15 if top - 15 > 15 else top + 15
# 	cv2.putText(image, name, (left, y), cv2.FONT_HERSHEY_SIMPLEX,
# 		0.75, (0, 255, 0), 2)

# # show the output image
# cv2.imshow("Image", image)
# cv2.waitKey(0)