def average(valeurs):
    if not valeurs:
        return None
    return sum(valeurs) / len(valeurs)

def get_minimum(values):
    if not values:
        raise ValueError("La liste ne peut pas être vide")
    return min(values)
