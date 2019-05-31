package core.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import core.model.Book;
import core.model.Client;
import core.model.Purchase;
import core.repository.PurchaseRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PurchaseServiceImpl implements PurchaseService {
    private static final Logger log = LoggerFactory.getLogger(
            PurchaseServiceImpl.class);

    @Autowired
    private PurchaseRepository purchaseRepository;


    @Override
    public List<Purchase> findAll() {
        log.trace("findAll --- method entered");

        List<Purchase> purchases = purchaseRepository.findAll();

        log.trace("findAll: purchases={}", purchases);

        return purchases;
    }

    @Override
    @Transactional
    public Purchase updatePurchase(Long purchaseId, Book book, Client client, int quantity) {
        log.trace("updatePurchase: book={}, client={}, quantity={}",
                book, client, quantity);

        Optional<Purchase> purchase = purchaseRepository.findById(purchaseId);

        purchase.ifPresent(s -> {
            s.setBook(book);
            s.setClient(client);
            s.setQuantity(quantity);
        });

        log.trace("updatePurchase: purchase={}", purchase.get());

        return purchase.orElse(null);
    }

    @Override
    public Purchase savePurchase(Purchase purchase) {
        return purchaseRepository.save(purchase);
    }

    @Override
    public void deletePurchase(Long purchaseId){
        purchaseRepository.deleteById(purchaseId);
    }
}
