export interface LatestInvoice {
    id: number;
    amount: string; // ou number selon vos besoins
    name: string;
    email: string; // Facultatif, selon votre structure de données
    image_url: string; // URL de l'image de la facture ou de l'utilisateur
  }