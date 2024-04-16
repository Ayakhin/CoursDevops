# test_lib.py
import lib
from lib import average

def test_average():
    # Créer une liste d'entrée avec des valeurs de test
    input1 = [11, -11, 10, 20]

    # Calculer la moyenne attendue pour input1 (la moyenne des valeurs dans input1)
    expected_result = sum(input1) / len(input1)

    # Appeler la fonction average sur input1
    actual_result = average(input1)

    # Vérifier que la moyenne calculée est égale à la moyenne attendue
    assert actual_result == expected_result, f"Erreur: Moyenne attendue {expected_result}, moyenne calculée {actual_result}"
    print("Tous les tests ont réussi !")
# Appeler la fonction de test
# test_average()


def test_get_minimum():
    input_values = [10, 5, 20, -5]
    expected_result = -5
    actual_result = lib.get_minimum(input_values)
    assert actual_result == expected_result