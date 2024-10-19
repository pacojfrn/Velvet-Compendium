
class PerAlreadyExistsException(Exception):
    """Excepción lanzada cuando una persona ya existe."""
    def __init__(self, message="Persona with the same name already exists"):
        self.message = message
        super().__init__(self.message)

class PerNotFoundException(Exception):
    """Excepción lanzada cuando no se encuentra una persona."""
    def __init__(self, message="Persona not found"):
        self.message = message
        super().__init__(self.message)

class InvalidPerRequestFormatException(Exception):
    """Excepción lanzada cuando el formato de la solicitud de persona es inválido."""
    def __init__(self, message="Invalid persona request format"):
        self.message = message
        super().__init__(self.message)

