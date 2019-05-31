package web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import core.model.Purchase;
import core.service.PurchaseService;
import web.converter.PurchaseConverter;
import web.dto.PurchaseDto;

import java.util.ArrayList;
import java.util.List;

@RestController
public class PurchaseController {
    private static final Logger log = LoggerFactory.getLogger(
            PurchaseController.class);

    @Autowired
    private PurchaseService purchaseService;

    @Autowired
    private PurchaseConverter purchaseConverter;


    @RequestMapping(value = "/purchases", method = RequestMethod.GET)
    public List<PurchaseDto> getPurchases() {
        log.trace("getPurchases");

        List<Purchase> purchases = purchaseService.findAll();

        log.trace("getPurchases: purchases={}", purchases);

        return new ArrayList<>(purchaseConverter.convertModelsToDtos(purchases));
    }

    @RequestMapping(value = "/purchases/{purchaseId}", method = RequestMethod.PUT)
    public PurchaseDto updatePurchase(
            @PathVariable final Long purchaseId,
            @RequestBody final PurchaseDto purchaseDto) {
        log.trace("updatePurchase: purchaseId={}, purchaseDtoMap={}", purchaseId,
                purchaseDto);

        Purchase purchase = purchaseService.updatePurchase(purchaseId,
                purchaseDto.getBook(), purchaseDto.getClient(), purchaseDto.getQuantity());

        PurchaseDto result = purchaseConverter.convertModelToDto(purchase);

        log.trace("updatePurchase: result={}", result);

        return result;
    }

    @RequestMapping(value = "/purchases", method = RequestMethod.POST)
    PurchaseDto savePurchase(@RequestBody PurchaseDto dto) {
        return purchaseConverter.convertModelToDto(
                purchaseService.savePurchase(
                        purchaseConverter.convertDtoToModel(dto)
                ));
    }

    @RequestMapping(value = "/purchases/{purchaseId}", method = RequestMethod.DELETE)
    public void deletePurchase(@PathVariable final Long purchaseId) {
        log.trace("deletePurchase: purchaseId={}", purchaseId);

        purchaseService.deletePurchase(purchaseId);
    }
}
