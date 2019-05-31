package web.converter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import core.model.Purchase;
import web.dto.PurchaseDto;


@Component
public class PurchaseConverter
        extends BaseConverter<Purchase, PurchaseDto> {

    private static final Logger log = LoggerFactory.getLogger(
            ClientConverter.class);

    @Override
    public Purchase convertDtoToModel(PurchaseDto dto) {
        Purchase purchase = new Purchase(dto.getBook(), dto.getClient(), dto.getQuantity());
        purchase.setId(dto.getId());
        return purchase;
    }

    @Override
    public PurchaseDto convertModelToDto(Purchase purchase) {
        PurchaseDto dto = new PurchaseDto(purchase.getBook(), purchase.getClient(), purchase.getQuantity());
        dto.setId(purchase.getId());
        return dto;
    }
}

