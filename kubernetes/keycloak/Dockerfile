FROM quay.io/keycloak/keycloak:21.0.2 as builder

RUN ./opt/keycloak/bin/kc.sh build

FROM quay.io/keycloak/keycloak:21.0.2

COPY --from=builder /opt/keycloak/ /opt/keycloak/

CMD ["start", "--edge", "proxy", "--hostname-strict=false", "--optimized"]