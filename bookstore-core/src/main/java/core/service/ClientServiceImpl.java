package core.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import core.model.Client;
import core.repository.ClientRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ClientServiceImpl implements ClientService {
    private static final Logger log = LoggerFactory.getLogger(
            ClientServiceImpl.class);

    @Autowired
    private ClientRepository clientRepository;


    @Override
    public List<Client> findAll() {
        log.trace("findAll --- method entered");

        List<Client> clients = clientRepository.findAll();

        log.trace("findAll: clients={}", clients);

        return clients;
    }

    @Override
    @Transactional
    public Client updateClient(Long clientId, String name) {
        log.trace("updateStudent: name={}",
                  name);

        Optional<Client> client = clientRepository.findById(clientId);

        client.ifPresent(s -> {
            s.setName(name);
        });

        log.trace("updateClient: client={}", client.get());

        return client.orElse(null);
    }

    @Override
    public Client saveClient(Client client) {
        return clientRepository.save(client);
    }

    @Override
    public void deleteClient(Long clientId){
        clientRepository.deleteById(clientId);
    }

}
