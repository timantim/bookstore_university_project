package core.service;

import core.model.Book;
import core.model.Client;
import core.model.Purchase;

import java.util.List;

public interface PurchaseService {
    List<Purchase> findAll();

    Purchase updatePurchase(Long purchaseId, Book book, Client client, int quantity);

    Purchase savePurchase(Purchase purchase);

    void deletePurchase(Long purchaseId);
}
