import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Order } from '../backend';

export function useCreateOrder() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: {
      id: string;
      customerName: string;
      address: string;
      quantity: bigint;
      amount: bigint;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.createOrder(
        params.id,
        params.customerName,
        params.address,
        params.quantity,
        params.amount
      );
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['order', data.id], data);
    },
  });
}

export function useGetOrder(orderId: string) {
  const { actor, isFetching } = useActor();

  return useQuery<Order | null>({
    queryKey: ['order', orderId],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getOrder(orderId);
    },
    enabled: !!actor && !isFetching && !!orderId,
  });
}

export function useSubmitUPIReference() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: { orderId: string; reference: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.submitUPIReference(params.orderId, params.reference);
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['order', variables.orderId] });
    },
  });
}
